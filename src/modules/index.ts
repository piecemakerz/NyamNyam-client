import { combineReducers } from 'redux';
import signup, { signupSaga } from './signup';
import signin, { signinSaga } from './signin';
import { all, fork, take, takeEvery } from 'redux-saga/effects';

import { createAuthCheckSaga } from '@base/lib/auth';

const rootReducer = combineReducers({
  signin,
  signup,
});

//actions에는 각 modules에 있는 action들을 배열로 담아서 import한 다음에 추가해준다

//import { resourceActionTypes } from '@base/modules/resource
const actions = [
  //...resourceActionTypes
  //...resourceActionsTypes2
  //...
];


//sagas에는 각 모듈에 있는 saga를 import해서 배열에 추가해준다.

//import { resourceSaga } from '@base/modules/resource
const sagas = [
  //resourceSaga,
  //resourceSaga2
  //...
];

const fakeActions = [
  'TEST1',
  'TEST2',
  'TEST3'
];

const fakeSagas = [
  function* test1(action: any){ console.log('test1: ', action) },
  function* test2(action: any){ console.log('test1: ', action) },
  function* test3(action: any){ console.log('test1: ', action) },
];

const resourceAuthCheckSaga = createAuthCheckSaga()

export function* rootSaga() {
  yield all([signinSaga(), signupSaga(), resourceAuthCheckSaga(fakeActions, fakeSagas)]); // all은 배열 안의 여러 사가를 동시에 실행시켜준다.
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

//function* testSaga(){
//  yield all([signinSaga(), signupSaga(), authCheckSaga()]);
//}
//
//const actions = [
//  'TEST1',
//  'TEST2',
//  'TEST3',
//  'TEST4',
//  'TEST5',
//  'TEST6',
//  'TEST7',
//  'TEST8',
//  'TEST9'
//];
//
//return function* authChekSaga(){
//            
//  while(true){
//      const action = yield take(actions);
//      console.log('saga action: ', action);
//
//      const isTokenValid = yield call(checkToken);
//      if(isTokenValid && ){
//          for(let i = 0; i < sagas.length; i++){
//              //사가에서 api요청 보낼 때 헤더에 access token 추가
//              yield fork(sagas[i], action);  
//          }
//      }
//  }
//};
//
//function* resourceApi1Saga(action: any){
//  switch(action.type){
//    case 'TEST1':
//      return yield fork( function* test1(){ });
//    case 'TEST2':
//      return yield fork( function* test2(){ });
//    case 'TEST3':
//      return yield fork( function* test3(){ });  
//  }
//}

//function* resourceApi2Saga(){
//  yield takeEvery('TEST4', function* test1(){ });
//  yield takeEvery('TEST5', function* test2(){ });
//  yield takeEvery('TEST6', function* test3(){ });
//}

//function* resourceApi3Saga(){
//  yield takeEvery('TEST7', function* test1(){ });
//  yield takeEvery('TEST8', function* test2(){ });
//  yield takeEvery('TEST9', function* test3(){ });
//}