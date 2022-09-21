import React from 'react'

export default function Frequencies({ values }) {

  const min = values[0];
  const max = values[values.length - 1];

  const arr = new Array(max - min + 1).fill(0);
  console.log(arr);
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Value</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        {
          arr.map((_e, index) => {
            return (
              <tr key={min + index}>
                <td>{min + index}</td>
                <td>{values.filter(e => e === (min + index)).length}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
