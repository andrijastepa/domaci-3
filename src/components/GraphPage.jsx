import React, { useEffect, useState } from 'react'
import Input from './Input';
import Point from './Point';
import XAsis from './XAsis';
import YAxis from './YAxis';

export default function GraphPage({ values }) {

  const [totalSlice, setTotalSlice] = useState(values.length);
  const [simulate, setSimulate] = useState(false);
  const [speed, setSpeed] = useState(150)
  useEffect(() => {
    if (!simulate) {
      return;
    }
    if (totalSlice === values.length) {
      setSimulate(false);
      return;
    }
    const timeout = setTimeout(() => {
      setTotalSlice(p => p + 1);
    }, speed)

    return timeout.unref;
  }, [simulate, totalSlice, speed])

  if (values.length === 0) {
    return null
  }
  const sliced = values.slice(0, simulate ? totalSlice : values.length).sort((a, b) => a - b);

  const total = sliced.reduce((acc, val) => acc + val, 0);
  const mean = total / sliced.length
  const totalDiff = sliced.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
  const variance = totalDiff / sliced.length

  const minNumber = sliced[0];
  const maxNumber = sliced[sliced.length - 1]

  const frequencyArr = new Array(maxNumber - minNumber + 1).fill(0);
  for (let value of sliced) {
    frequencyArr[value - minNumber]++;
  }

  const maxFrequency = frequencyArr.reduce((acc, val) => acc > val ? acc : val, 0);

  return (
    <div className='container'>
      <div className='row p-2'>
        <div className='col-4'>
          <Input
            label='Mean'
            readOnly
            value={mean}
          />
        </div>
        <div className='col-4'>
          <Input
            label='Variance'
            readOnly
            value={variance}
          />
        </div>
        <div className='col-4'>
          <Input
            label='Standard deviation'
            readOnly
            value={Math.sqrt(variance)}
          />
        </div>
      </div>
      <div className='row p-2 d-flex align-items-center'>
        <div className='col-4'>
          <Input
            label='Timeout'
            readOnly={simulate}
            onChange={setSpeed}
            value={speed}
          />
        </div>
        <div className='col-4'>
          <button className='btn btn-success'
            onClick={() => {
              setSimulate(p => !p);
              setTotalSlice(1);
            }}
          >{simulate ? 'Stop' : 'Start'} point population</button>
        </div>
      </div>
      <div className='pt-5'>
        <div className='border graph '>
          <XAsis min={minNumber} max={maxNumber} />
          <YAxis max={maxFrequency} />
          {
            values.slice(0, simulate ? totalSlice : values.length).map(value => {
              return (
                <Point
                  x={(value - minNumber) / (maxNumber - minNumber)}
                  y={frequencyArr[value - minNumber] / maxFrequency}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
