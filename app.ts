import {ApiCaller} from './services/ApiCaller';

async function getData(){
  console.log(await ApiCaller.callApi());
}

getData()
  .then(() => {
})
  .catch(err => {
  console.log(err)
})