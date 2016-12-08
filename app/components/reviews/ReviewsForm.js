import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { validateReview } from '../../util/reviewValidations'
import { addReview } from '../../actions/reviewActions'
import { addFlashMessage } from '../../actions/flashMessages'
import TextFieldGroup from '../common/TextFieldGroup'

class ReviewsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spotId: this.props.spotId,
      title: '',
      author: '',
      email: '',
      rating: 0,
      body: '',
      errors: {},
      showForm: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.isValid = this.isValid.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  isValid() {
    const { errors, isValid } = validateReview(this.state)

    if(!isValid) {
      this.setState({ errors })
    }

    return isValid
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({ errors: {} })

    if(this.isValid()) {
      this.props.addReview(this.state).then(res => {
        this.setState({ title: '', author: '', email: '', rating: 0, body: '', showForm: false })
        this.props.addFlashMessage({
          type: 'success',
          text: 'Review added successfully!'
        })
      })
    }
  }

  handleClick() {
    this.setState({ showForm: true })
  }

  render(){
    const { title, author, email, rating, body, errors, showForm } = this.state
    return(
      <div className="form-horizontal">
        <form onSubmit={this.onSubmit} className={classnames("review-form", {'review-visible': showForm})}>
          <TextFieldGroup
            field="title"
            label="Title"
            value={title}
            error={errors.title}
            onChange={this.onChange}
          />

          <TextFieldGroup
            field="author"
            label="Your Name"
            value={author}
            error={errors.author}
            onChange={this.onChange}
          />

          <TextFieldGroup
            field="email"
            type="email"
            label="Your Email"
            value={email}
            error={errors.email}
            onChange={this.onChange}
          />

          <TextFieldGroup
            field="rating"
            type="number"
            label="Rating (1-10)"
            value={rating}
            error={errors.rating}
            onChange={this.onChange}
          />

        <div style={{marginTop: '5px'}} className={classnames("form-group", { 'has-error': errors.body })}>
          <label>Review</label>
            <textarea
              className="form-control"
              name='body'
              onChange={this.onChange}
              value={body}
              placeholder='Post Message'
            >
            </textarea>
            {errors.body && <span className="help-block">{errors.body}</span>}
          </div>

          <button type="submit" className="btn btn-primary">Add Review</button>
        </form>
        <button onClick={this.handleClick.bind(this)} className={classnames('btn btn-primary', { 'hide-button': showForm })}>Add a Review</button>
      </div>
    )
  }
}

export default connect(null, { addReview, addFlashMessage })(ReviewsForm)
