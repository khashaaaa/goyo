import React from 'react'
import { render } from 'react-dom'
import '../design/index.scss'

import { Prog } from './prog'

// Цонхны хэмжээг харах
console.log(window.innerWidth)

render(<Prog />, document.getElementById('goyo'))