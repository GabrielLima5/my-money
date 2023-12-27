import React, { Component } from 'react'
import If from '../if/If'
import { connect } from 'react-redux'

class TabContent extends Component{
    render(){
        const visible = this.props.visible[this.props.id] 
        const selected = this.props.selected === this.props.id
        return(
            <If test={visible}>
                <div id={this.props.id}
                    className={`tab-pane ${selected && 'active'}`}
                >
                    {this.props.children}
                </div>
            </If>
            
        )
    }
}

const mapStateToProps = (state) => ({selected: state.tab.selected, visible: state.tab.visible})
export default connect(mapStateToProps)(TabContent)