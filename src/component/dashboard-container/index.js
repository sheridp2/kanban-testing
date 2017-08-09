import React from 'react'
import {connect} from 'react-redux'
import './dashboard-container.scss'
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

import CategoryForm from '../category-form'
import CategoryItem from '../category-item'

class DashboardContainer extends React.Component {
  componentDidMount(){
    this.props.categoryCreate({title: 'ready'})
    this.props.categoryCreate({title: 'in prgress'})
    this.props.categoryCreate({title: 'done'})
    this.props.categoryCreate({title: 'review'})
  }
  render(){
    return (
      <main className='dashboard-container'>
        <h2> dashboard </h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
          />

        {this.props.categorys.map((item) =>
          <CategoryItem key={item.id} category={item} />
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categorys: state.categorys,
  }
}


const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(DashboardContainer)
