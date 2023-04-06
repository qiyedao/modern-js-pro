import Apis from '../Apis';
import { AxiosGet } from '@/utils/request';
/**
 * currentUser
 * @param params
 * @returns
 */
export async function currentUser(params: { id?: string }): Promise<any> {
  return AxiosGet(`${Apis.login}`, params);
}
