import React from 'react'
import TextFieldGroup from '../common/TextFieldGroup'
import { connect } from 'react-redux'
import { addSpot } from '../../actions/spotActions'
import { addFlashMessage } from '../../actions/flashMessages'

class NewSpotForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      features: '',
      featured: false,
      errors: {}
    };

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addSpot(this.state);
    this.props.addFlashMessage({
      type: 'success',
      text: 'Spot added successfully!'
    })
    this.context.router.push('/')
  }

  render(){
    const { name, phoneNumber, address, city, province, postalCode, features, errors } = this.state
    return(
      <form onSubmit={this.onSubmit}>
        <h1>Add Spot</h1>
          <TextFieldGroup
            field="name"
            label="Spot Name"
            value={name}
            error={errors.name}
            onChange={this.onChange}
          />
          <TextFieldGroup
            field="phoneNumber"
            label="Phone Number"
            value={phoneNumber}
            error={errors.phoneNumber}
            onChange={this.onChange}
          />
          <TextFieldGroup
            field="address"
            label="Address"
            value={address}
            error={errors.address}
            onChange={this.onChange}
          />
          <TextFieldGroup
            field="city"
            label="City"
            value={city}
            error={errors.city}
            onChange={this.onChange}
          />
          <TextFieldGroup
            field="province"
            label="Province"
            value={province}
            error={errors.province}
            onChange={this.onChange}
          />
          <TextFieldGroup
            field="postalCode"
            label="Postal Code"
            value={postalCode}
            error={errors.postalCode}
            onChange={this.onChange}
          />
          <TextFieldGroup
            field="features"
            label="Features"
            value={features}
            error={errors.features}
            onChange={this.onChange}
          />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

NewSpotForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { addSpot, addFlashMessage })(NewSpotForm);
