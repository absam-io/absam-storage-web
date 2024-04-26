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

package site_replication

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/absam-io/absam-storage-web/models"
)

// SiteReplicationInfoAddOKCode is the HTTP code returned for type SiteReplicationInfoAddOK
const SiteReplicationInfoAddOKCode int = 200

/*
SiteReplicationInfoAddOK A successful response.

swagger:response siteReplicationInfoAddOK
*/
type SiteReplicationInfoAddOK struct {

	/*
	  In: Body
	*/
	Payload *models.SiteReplicationAddResponse `json:"body,omitempty"`
}

// NewSiteReplicationInfoAddOK creates SiteReplicationInfoAddOK with default headers values
func NewSiteReplicationInfoAddOK() *SiteReplicationInfoAddOK {

	return &SiteReplicationInfoAddOK{}
}

// WithPayload adds the payload to the site replication info add o k response
func (o *SiteReplicationInfoAddOK) WithPayload(payload *models.SiteReplicationAddResponse) *SiteReplicationInfoAddOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the site replication info add o k response
func (o *SiteReplicationInfoAddOK) SetPayload(payload *models.SiteReplicationAddResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *SiteReplicationInfoAddOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*
SiteReplicationInfoAddDefault Generic error response.

swagger:response siteReplicationInfoAddDefault
*/
type SiteReplicationInfoAddDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewSiteReplicationInfoAddDefault creates SiteReplicationInfoAddDefault with default headers values
func NewSiteReplicationInfoAddDefault(code int) *SiteReplicationInfoAddDefault {
	if code <= 0 {
		code = 500
	}

	return &SiteReplicationInfoAddDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the site replication info add default response
func (o *SiteReplicationInfoAddDefault) WithStatusCode(code int) *SiteReplicationInfoAddDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the site replication info add default response
func (o *SiteReplicationInfoAddDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the site replication info add default response
func (o *SiteReplicationInfoAddDefault) WithPayload(payload *models.APIError) *SiteReplicationInfoAddDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the site replication info add default response
func (o *SiteReplicationInfoAddDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *SiteReplicationInfoAddDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
