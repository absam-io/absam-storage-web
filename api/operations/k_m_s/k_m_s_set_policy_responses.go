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

package k_m_s

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/absam-io/absam-storage-web/models"
)

// KMSSetPolicyOKCode is the HTTP code returned for type KMSSetPolicyOK
const KMSSetPolicyOKCode int = 200

/*
KMSSetPolicyOK A successful response.

swagger:response kMSSetPolicyOK
*/
type KMSSetPolicyOK struct {
}

// NewKMSSetPolicyOK creates KMSSetPolicyOK with default headers values
func NewKMSSetPolicyOK() *KMSSetPolicyOK {

	return &KMSSetPolicyOK{}
}

// WriteResponse to the client
func (o *KMSSetPolicyOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(200)
}

/*
KMSSetPolicyDefault Generic error response.

swagger:response kMSSetPolicyDefault
*/
type KMSSetPolicyDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewKMSSetPolicyDefault creates KMSSetPolicyDefault with default headers values
func NewKMSSetPolicyDefault(code int) *KMSSetPolicyDefault {
	if code <= 0 {
		code = 500
	}

	return &KMSSetPolicyDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the k m s set policy default response
func (o *KMSSetPolicyDefault) WithStatusCode(code int) *KMSSetPolicyDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the k m s set policy default response
func (o *KMSSetPolicyDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the k m s set policy default response
func (o *KMSSetPolicyDefault) WithPayload(payload *models.APIError) *KMSSetPolicyDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the k m s set policy default response
func (o *KMSSetPolicyDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *KMSSetPolicyDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
