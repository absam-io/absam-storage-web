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

package service_account

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/absam-io/absam-storage-web/models"
)

// UpdateServiceAccountOKCode is the HTTP code returned for type UpdateServiceAccountOK
const UpdateServiceAccountOKCode int = 200

/*
UpdateServiceAccountOK A successful response.

swagger:response updateServiceAccountOK
*/
type UpdateServiceAccountOK struct {
}

// NewUpdateServiceAccountOK creates UpdateServiceAccountOK with default headers values
func NewUpdateServiceAccountOK() *UpdateServiceAccountOK {

	return &UpdateServiceAccountOK{}
}

// WriteResponse to the client
func (o *UpdateServiceAccountOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(200)
}

/*
UpdateServiceAccountDefault Generic error response.

swagger:response updateServiceAccountDefault
*/
type UpdateServiceAccountDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewUpdateServiceAccountDefault creates UpdateServiceAccountDefault with default headers values
func NewUpdateServiceAccountDefault(code int) *UpdateServiceAccountDefault {
	if code <= 0 {
		code = 500
	}

	return &UpdateServiceAccountDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the update service account default response
func (o *UpdateServiceAccountDefault) WithStatusCode(code int) *UpdateServiceAccountDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the update service account default response
func (o *UpdateServiceAccountDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the update service account default response
func (o *UpdateServiceAccountDefault) WithPayload(payload *models.APIError) *UpdateServiceAccountDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the update service account default response
func (o *UpdateServiceAccountDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *UpdateServiceAccountDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
