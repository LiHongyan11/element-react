import './style.scss';

import React from 'react';
import { Component, Markdown } from '../../../libs';
import template from '../../docs/zh-CN/input.md';

export default class Playground extends Component {
  render() {
    return <Markdown context={this} component="Input">{template}</Markdown>
  }
}
