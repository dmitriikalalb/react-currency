import React, {useEffect} from 'react'
import TextBlock from '../components/TextBlock'
import Table from '../components/Table'
import {Navigate, useParams} from 'react-router-dom';
import MockData from '../content/mock-data.json'
import {useDispatch} from 'react-redux';
import {addCurrencyFrom, addCurrencyTo} from '../store/actions/currencyAction';

const DetailsPage = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const currencyTo = MockData.find(currency => currency.link === params.currencyTo)
  const currencyFrom = MockData.find(currency => currency.link === params.currencyFrom)

  if (!currencyTo || !currencyFrom) {
    return <Navigate to={'/'}/>
  }

  useEffect(() =>{
    dispatch(addCurrencyTo(currencyTo))
    dispatch(addCurrencyFrom(currencyFrom))
  },[])



  return (
    <>
      <TextBlock title={`Обмен ${currencyTo.name} на ${currencyFrom.name}`}/>
      <Table/>
    </>
  )
}

export default DetailsPage
