// @ts-ignore
import service from '@/service';
import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators';

export interface ICommonState {

}

@Module({namespaced: true})
export default class CommonModule extends VuexModule implements ICommonState {

  @Mutation
  public initFormSetting() {

  }

  // @Action({commit: 'initFormSetting'})
  // async initFormAction() {
  //   return result.status === 20000 ? result.data : {};
  // }


}
