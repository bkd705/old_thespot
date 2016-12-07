import React from 'react'
import TextFieldGroup from '../common/TextFieldGroup'

class ReviewsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      email: '',
      rating: 0,
      body: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.state)
  }

  render(){
    const { title, author, email, rating, body, errors } = this.state
    return(
      <form onSubmit={this.onSubmit}>
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

        <TextFieldGroup
          field="body"
          label="Review"
          value={body}
          error={errors.body}
          onChange={this.onChange}
        />
      </form>
    )
  }
}

export default ReviewsForm
