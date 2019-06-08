import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import {
  Field,
  Control,
  Input,
  Select,
} from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import Icon from 'react-bulma-components/lib/components/icon';

import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';

class MenuAdd extends Base {

  render() {
    return (
      <div style={{ width: '80%', marginLeft: '10%' }}>
      <Columns>
        <Columns.Column size={7}>

          <div style={{ padding: '70px 0' }}>

            <h1 className="title">Add Menu Item</h1>

            <Field kind='addons' horizontal>
              <Field.Label>Type</Field.Label>
              <Field.Body>
                <Control fullwidth>
                  <Select fullwidth>
                    <option>Side</option>
                    <option>Main Course</option>
                  </Select>
                </Control>
              </Field.Body>
            </Field>

            <Field kind='addons' horizontal>
              <Field.Label>Name</Field.Label>
              <Field.Body>
                <Control fullwidth>
                  <Input placeholder="" />
                </Control>
              </Field.Body>
            </Field>

            <Field kind='addons' horizontal>
              <Field.Label>Price</Field.Label>
              <Field.Body>
                <Control className="has-icons-left">
                  <Input />
                  <span className="icon is-small is-left">
                    <i className="fas fa-pound-sign" />
                  </span>
                </Control>
              </Field.Body>
            </Field>

            <Field kind='addons' horizontal>
              <Field.Label>Photo</Field.Label>
              <Field.Body>
                <Control fullwidth>
                  <div className="file is-info has-name">
                    <input className="file-input" type="file" name="resume" />
                    <span className="file-cta">
                      <span className="file-label">
                        Choose Photo
                      </span>
                    </span>
                  </div>
                </Control>
              </Field.Body>

            </Field>

            <Field kind='addons'>
              <Field.Body>
                <Control fullwidth>
                  <Button type="primary">Submit</Button>
                </Control>
              </Field.Body>
            </Field>

          </div>

        </Columns.Column>
      </Columns>
      </div>
    );
  }
}

export default DashboardWrapper(
  MenuAdd,
  {},
  state => ({}),
);
