import { Injectable } from '@nestjs/common';
import {Datastore} from'@google-cloud/datastore';
import { google } from "@google-cloud/datastore/build/protos/protos";
import ICommitResponse = google.datastore.v1.ICommitResponse;
import { entity } from "@google-cloud/datastore/build/src/entity";
import { CodeVote, User } from "./types";
import { logger } from "./logger";

interface DatastoreEntity {
    id: string
}

export interface DatastoreQuery {
    property: string,
    operator: "=" | "<" | ">" | "<=" | ">=" | "HAS_ANCESTOR",
    value: {}
}

export class DatastoreService<T extends DatastoreEntity> {

    datastore: Datastore;

    constructor(private readonly kind: string) {
        this.datastore = new Datastore();
    }

    /**
     * Creates or updates entity. Does not check for existance
     * @return ID of the created item
     */
    async save(entity: Partial<T>): Promise<string> {
        const key = this.createKey(entity.id);
        const datastoreEntity = {
            key,
            data: entity
        };
        await this.datastore.save(datastoreEntity);
        logger.log(`Saved ${this.kind} ${key.name}`)
        return key.name;
    }

    /**
     * Updates given entity, fails if entity doesn't exists
     */
    async update(id: string, entity: Partial<T>): Promise<[ICommitResponse]> {
        if (!id) {
            throw Error(`Id is needed for update operation.`);
        }
        const existing = await this.get(id);
        if (!existing) {
            throw new Error(`Entity with id ${id}, doesn't exists`);
        }
        entity.id = id; // id cannot be empty
        const datastoreEntity = {
            key: this.createKey(id),
            data: entity
        };
        return this.datastore.update(datastoreEntity);
    }

    /**
     * Retrieve complete entity by id
     */
    async get(entityId: string): Promise<T> {
        const key = this.createKey(entityId);
        const [entity] = await this.datastore.get(key);
        if (entity) {
            entity.id = entityId;
        }
        return entity;
    }

    /**
     * Retrieve complete entity by id
     */
    async getMultiple(entityIds: string[]): Promise<T[]> {
        const keys = entityIds.map(id => this.createKey(id));
        const [entities] = await this.datastore.get(keys);
        return entities;
    }

    async getAll(): Promise<T[]> {
        const query = this.datastore.createQuery(this.kind);
        const [entities] = await this.datastore.runQuery(query);
        return entities;
    }

    /**
     * Deletes entity with key, does not check for existance
     */
    async remove(entityId: string): Promise<void> {
        const key = this.createKey(entityId);
        await this.datastore.delete(key);
    }

    /**
     * Check existance
     */
    async exists(entityId: string): Promise<boolean> {
        const exists = await this.get(entityId);
        return !!exists;
    }

    async query(query: DatastoreQuery): Promise<T[]> {
        const datastoreQuery = this.datastore.createQuery(this.kind);
        datastoreQuery.filter(query.property, query.operator, query.value);
        const [entities] = await this.datastore.runQuery(datastoreQuery);
        return entities;
    }

    private createKey(id: string): entity.Key {
        return this.datastore.key([this.kind, id]);
    }
}

@Injectable()
export class UserDatastoreService extends DatastoreService<User>{
    constructor() {
        super('User');
    }
}

@Injectable()
export class CodeVoteDatastoreService extends DatastoreService<CodeVote>{
    constructor() {
        super('CodeVote');
    }
}
