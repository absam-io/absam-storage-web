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

package group

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/absam-io/absam-storage-web/models"
)

// AddGroupCreatedCode is the HTTP code returned for type AddGroupCreated
const AddGroupCreatedCode int = 201

/*
AddGroupCreated A successful response.

swagger:response addGroupCreated
*/
type AddGroupCreated struct {
}

// NewAddGroupCreated creates AddGroupCreated with default headers values
func NewAddGroupCreated() *AddGroupCreated {

	return &AddGroupCreated{}
}

// WriteResponse to the client
func (o *AddGroupCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(201)
}

/*
AddGroupDefault Generic error response.

swagger:response addGroupDefault
*/
type AddGroupDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewAddGroupDefault creates AddGroupDefault with default headers values
func NewAddGroupDefault(code int) *AddGroupDefault {
	if code <= 0 {
		code = 500
	}

	return &AddGroupDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the add group default response
func (o *AddGroupDefault) WithStatusCode(code int) *AddGroupDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the add group default response
func (o *AddGroupDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the add group default response
func (o *AddGroupDefault) WithPayload(payload *models.APIError) *AddGroupDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the add group default response
func (o *AddGroupDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *AddGroupDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
