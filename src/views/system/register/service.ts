import { request } from '../../../api/request';

interface PlainObject {}

export interface CreateUserData {
  account: string;
  password: string;
  mobile: string;
  code: string;
}

export interface CreateUserResponse {
  id: number;
}

export function apiCreateUser(data: CreateUserData) {
  //  request<CreateUserResponse>--ts定义返回值的类型
  return request<CreateUserResponse>({
    method: 'POST',
    url: '/user/register',
    data,
  });
}
