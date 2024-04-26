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

package bucket

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/absam-io/absam-storage-web/models"
)

// AddBucketLifecycleCreatedCode is the HTTP code returned for type AddBucketLifecycleCreated
const AddBucketLifecycleCreatedCode int = 201

/*
AddBucketLifecycleCreated A successful response.

swagger:response addBucketLifecycleCreated
*/
type AddBucketLifecycleCreated struct {
}

// NewAddBucketLifecycleCreated creates AddBucketLifecycleCreated with default headers values
func NewAddBucketLifecycleCreated() *AddBucketLifecycleCreated {

	return &AddBucketLifecycleCreated{}
}

// WriteResponse to the client
func (o *AddBucketLifecycleCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(201)
}

/*
AddBucketLifecycleDefault Generic error response.

swagger:response addBucketLifecycleDefault
*/
type AddBucketLifecycleDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewAddBucketLifecycleDefault creates AddBucketLifecycleDefault with default headers values
func NewAddBucketLifecycleDefault(code int) *AddBucketLifecycleDefault {
	if code <= 0 {
		code = 500
	}

	return &AddBucketLifecycleDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the add bucket lifecycle default response
func (o *AddBucketLifecycleDefault) WithStatusCode(code int) *AddBucketLifecycleDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the add bucket lifecycle default response
func (o *AddBucketLifecycleDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the add bucket lifecycle default response
func (o *AddBucketLifecycleDefault) WithPayload(payload *models.APIError) *AddBucketLifecycleDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the add bucket lifecycle default response
func (o *AddBucketLifecycleDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *AddBucketLifecycleDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
