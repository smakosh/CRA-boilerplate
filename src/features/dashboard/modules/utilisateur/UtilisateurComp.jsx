import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import InputField from 'ui/components/InputField'
import ErrorField from 'ui/components/ErrorField'
import Button from 'ui/components/Button'
import Spinner from 'react-spinkit'
import Card from 'ui/components/Card'
import {
  Wrapper,
  Title,
  CardWrapper,
  Center,
} from 'features/auth/components/shared-style'

export default function utilisateur() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        recaptcha: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),
      })}
      onSubmit={async (
        { email, password },
        { setSubmitting, setFieldError }
      ) => {
        try {
          // login({
          //   dispatchUser,
          //   setFieldError,
          //   setSubmitting,
          //   values: { login: email, password },
          // })
        } catch (err) {
          setSubmitting(false)
        }
      }}
    >
      {({ isSubmitting, handleSubmit, errors, touched, setFieldValue }) => (
        <Form onSubmit={handleSubmit}>
          <Title>Login</Title>
          <CardWrapper as={Card}>
            <InputField label="Email">
              <Field type="text" name="email" placeholder="Email" />
            </InputField>
            <InputField
              label="Password"
              error={errors.password && touched.password}
            >
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage component={ErrorField} name="password" />
            </InputField>
            <Center>
              <Button
                type="submit"
                disabled={isSubmitting}
                size="large"
                variant="primary"
              >
                {isSubmitting ? (
                  <Spinner name="circle" color="white" />
                ) : (
                  <span>Login</span>
                )}
              </Button>
            </Center>
            <Center>
              {/* <p>
                    Don’t have an account? No worries,{' '}
                    <Link to="/signup">you can create one now</Link>
                  </p> */}
            </Center>
          </CardWrapper>
        </Form>
      )}
    </Formik>
  )
}
