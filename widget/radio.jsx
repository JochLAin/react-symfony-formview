'use strict';

import React, { Component } from 'react';

/**
{%- block radio_widget -%}
    <input type="radio" {{ block('widget_attributes') }}{% if value is defined %} value="{{ value }}"{% endif %}{% if checked %} checked="checked"{% endif %} />
{%- endblock radio_widget -%}
 */
import WidgetAttributes from '@components/form/attributes';

export default class Checkbox extends Component {
    render() {
        const { checked, value } = this.props.vars;
        return <input type="radio" {...WidgetAttributes.call(this)} value={value} checked={checked} />
    }
}