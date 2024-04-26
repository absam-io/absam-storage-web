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

package policy

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/absam-io/absam-storage-web/models"
)

// RemovePolicyNoContentCode is the HTTP code returned for type RemovePolicyNoContent
const RemovePolicyNoContentCode int = 204

/*
RemovePolicyNoContent A successful response.

swagger:response removePolicyNoContent
*/
type RemovePolicyNoContent struct {
}

// NewRemovePolicyNoContent creates RemovePolicyNoContent with default headers values
func NewRemovePolicyNoContent() *RemovePolicyNoContent {

	return &RemovePolicyNoContent{}
}

// WriteResponse to the client
func (o *RemovePolicyNoContent) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(204)
}

/*
RemovePolicyDefault Generic error response.

swagger:response removePolicyDefault
*/
type RemovePolicyDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewRemovePolicyDefault creates RemovePolicyDefault with default headers values
func NewRemovePolicyDefault(code int) *RemovePolicyDefault {
	if code <= 0 {
		code = 500
	}

	return &RemovePolicyDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the remove policy default response
func (o *RemovePolicyDefault) WithStatusCode(code int) *RemovePolicyDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the remove policy default response
func (o *RemovePolicyDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the remove policy default response
func (o *RemovePolicyDefault) WithPayload(payload *models.APIError) *RemovePolicyDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the remove policy default response
func (o *RemovePolicyDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *RemovePolicyDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
