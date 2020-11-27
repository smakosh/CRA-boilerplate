import React from 'react'
import { Link } from 'react-router-dom'
import Recaptcha from 'react-google-recaptcha'
import Spinner from 'react-spinkit'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ENVIRONMENT, RECAPTCHA_PUBLIC_KEY } from 'config'
import Container from 'ui/components/Container'
import InputField from 'ui/components/InputField'
import ErrorField from 'ui/components/ErrorField'
import Button from 'ui/components/Button'
import Card from 'ui/components/Card'
import SEO from 'ui/components/SEO'
import { login } from 'features/auth/actions'
import useDispatchUser from 'features/auth/hooks/useDispatchUser'
import {
  Wrapper,
  Title,
  CardWrapper,
  Center,
} from 'features/auth/components/shared-style'

const Login = () => {
  const dispatchUser = useDispatchUser()

  return (
    <Container>
      <SEO url="/" title="Login" />
      <Wrapper spacing={5}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            recaptcha: '',
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
            recaptcha:
              (ENVIRONMENT !== 'development' &&
                Yup.string().required(
                  'Robots are not welcome yet! maybe soon 😊'
                )) ||
              Yup.boolean().required(
                'Robots are not welcome yet! maybe soon 😊'
              ),
          })}
          onSubmit={async (
            { email, password },
            { setSubmitting, setFieldError }
          ) => {
            try {
              login({
                dispatchUser,
                setFieldError,
                setSubmitting,
                values: { email, password },
              })
            } catch (err) {
              setSubmitting(false)
            }
          }}
        >
          {({ isSubmitting, handleSubmit, errors, touched, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Title>Login</Title>
              <CardWrapper as={Card}>
                <InputField
                  label="Email"
                  error={errors.email && touched.email ? true : false}
                >
                  <Field type="email" name="email" placeholder="Email" />
                  <ErrorMessage component={ErrorField} name="email" />
                </InputField>
                <InputField
                  label="Password"
                  error={errors.password && touched.password ? true : false}
                >
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage component={ErrorField} name="password" />
                </InputField>
                {ENVIRONMENT !== 'development' && (
                  <InputField
                    error={errors.recaptcha && touched.recaptcha ? true : false}
                  >
                    <Field
                      component={Recaptcha}
                      sitekey={RECAPTCHA_PUBLIC_KEY}
                      name="recaptcha"
                      onChange={(value: string | boolean) =>
                        setFieldValue('recaptcha', value)
                      }
                    />
                    <ErrorMessage component={ErrorField} name="recaptcha" />
                  </InputField>
                )}
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
                  <p>
                    Don’t have an account? No worries,{' '}
                    <Link to="/signup">you can create one now</Link>
                  </p>
                </Center>
              </CardWrapper>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  )
}

export default Login
