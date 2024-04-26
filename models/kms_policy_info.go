// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// KmsPolicyInfo kms policy info
//
// swagger:model kmsPolicyInfo
type KmsPolicyInfo struct {

	// created at
	CreatedAt string `json:"createdAt,omitempty"`

	// created by
	CreatedBy string `json:"createdBy,omitempty"`

	// name
	Name string `json:"name,omitempty"`
}

// Validate validates this kms policy info
func (m *KmsPolicyInfo) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this kms policy info based on context it is used
func (m *KmsPolicyInfo) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *KmsPolicyInfo) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *KmsPolicyInfo) UnmarshalBinary(b []byte) error {
	var res KmsPolicyInfo
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
