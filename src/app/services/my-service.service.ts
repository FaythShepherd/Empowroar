import { Injectable } from '@angular/core';
import { Pool } from 'pg';
import { databaseConfig } from '../database';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  pool: Pool;

  constructor() {
    this.pool = new Pool(databaseConfig);
   }
  
   async getData() {
    const client = await this.pool.connect();
    try {
      const result = await client.query('SELECT * FROM my_table');
      return result.rows;
    } finally {
      client.release();
    }
  }
}

