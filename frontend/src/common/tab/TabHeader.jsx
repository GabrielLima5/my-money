import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import If from '../if/If'

import { selectTab } from './tabActions'

class TabHeader extends Component{
    render(){
        const target = this.props.target
        const visible = this.props.visible[target]
        const selected = this.props.selected === target
        return(
           <If test={visible}>
                <li className="nav-item mx-2">
                    <a  className={`nav-link ${selected && 'active'}`}
                        onClick={() => this.props.selectTab(target)}
                        href="#"
                        data-toggle='tab'
                        data-target={target}
                    >
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>
           </If>
           
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.tab.selected,
        visible: state.tab.visible
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectTab}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)