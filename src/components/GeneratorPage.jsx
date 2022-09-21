import React, { useState } from 'react'
import Frequencies from './Frequencies';
import Input from './Input';

export default function GeneratorPage({ values, setValues }) {
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(1)
  const [total, setTotal] = useState(1);
  return (
    <div className='container'>
      <h1 className='p-2 text-center'>Generate numbers</h1>
      <div className='row d-flex align-items-center'>
        <div className='col-3'>

          <Input
            label='Min'
            value={minimum}
            onChange={setMinimum}
          />
        </div>
        <div className='col-3'>
          <Input
            label='Max'
            value={maximum}
            onChange={setMaximum}
          />
        </div>
        <div className='col-3'>
          <Input
            label='Total numbers'
            value={total}
            onChange={setTotal}
          />
        </div>
        <div className='col-3'>
          <button className='btn btn-primary' onClick={() => {
            let numbers = [];
            const minN = Number(minimum);
            const maxN = Number(maximum);
            for (let i = 0; i < total; i++) {
              const randomNumber = Math.random() * (maxN - minN) + minN;
              numbers.push(Math.floor(randomNumber));
            }
            setValues(numbers);
          }}>Generate</button>
        </div>
      </div>
      <div className='mt-2'>
        {
          values.length > 0 && (
            <Frequencies
              values={values.slice().sort((a, b) => a - b)}
            />
          )
        }
      </div>
    </div>
  )
}
