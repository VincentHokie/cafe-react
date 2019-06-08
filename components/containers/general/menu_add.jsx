import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import {
  Field,
  Control,
  Input,
  Select,
} from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';

import Base from '../base.jsx';
import DashboardWrapper from '../dashboardHOC.jsx';

class MenuAdd extends Base {

  render() {
    return (
      <Columns>
        <Columns.Column size={5}>

          <div style={{ padding: '70px 0' }}>

            <h1 className="title">Add Menu Item</h1>

            <Field className="is-horizontal">
              <Field.Label>Type</Field.Label>
              <Field.Body>
                <Control>
                  <Select>
                    <option>Side</option>
                    <option>Main Course</option>
                  </Select>
                </Control>
              </Field.Body>
            </Field>

            <Field className="is-horizontal">
              <Field.Label>Name</Field.Label>
              <Field.Body>
                <Control>
                  <Input placeholder="" />
                </Control>
              </Field.Body>
            </Field>

            <Field className="is-horizontal">
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

            <Field className="is-horizontal">
              <Field.Label>Photo</Field.Label>
              <Field.Body>
                <Control>
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

            <Field>
              <Field.Body>
                <Control>
                  <Button type="primary">Submit</Button>
                </Control>
              </Field.Body>
            </Field>

          </div>

        </Columns.Column>
      </Columns>
    );
  }
}

export default DashboardWrapper(
  MenuAdd,
  {},
  state => ({}),
);
