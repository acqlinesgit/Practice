import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  localStorage: Storage;
  sessionStorage: Storage;

  constructor() { }

  setSession(key: string, value: string) { //  儲存session
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  getSession(key: string) { // 取得Session
    return JSON.parse(sessionStorage.getItem(key));
  }
  clearSession() { // 清空storage
    sessionStorage.clear();
  }
}
