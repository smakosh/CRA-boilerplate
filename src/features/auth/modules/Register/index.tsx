import React from 'react'
import { Link } from 'react-router-dom'
import Recaptcha from 'react-google-recaptcha'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Spinner from 'react-spinkit'
import Container from 'ui/components/Container'
import InputField from 'ui/components/InputField'
import ErrorField from 'ui/components/ErrorField'
import Button from 'ui/components/Button'
import Card from 'ui/components/Card'
import SEO from 'ui/components/SEO'
import useDispatchUser from 'features/auth/hooks/useDispatchUser'
import { register } from 'features/auth/actions'
import { ENVIRONMENT, RECAPTCHA_PUBLIC_KEY, LANDING_PAGE_URL } from 'config'
import {
  Wrapper,
  Center,
  Title,
  CardWrapper,
} from 'features/auth/components/shared-style'

const Register = () => {
  const dispatchUser = useDispatchUser()

  return (
    <Container>
      <SEO url="/register" title="Register" />
      <Wrapper>
        <Formik
          enableReinitialize
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            recaptcha: '',
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required(),
            confirmPassword: Yup.string().when('password', {
              is: (val) => (val && val.length > 0 ? true : false),
              then: Yup.string().oneOf(
                [Yup.ref('password')],
                'Passwords do not match'
              ),
            }),
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
            { username, email, password },
            { setSubmitting, setFieldError }
          ) => {
            try {
              register({
                dispatchUser,
                setFieldError,
                setSubmitting,
                values: { username, email, password },
              })
            } catch (err) {
              setSubmitting(false)
            }
          }}
        >
          {({ isSubmitting, handleSubmit, errors, touched, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Title>Sign up</Title>
              <CardWrapper as={Card}>
                <InputField
                  label="Username"
                  error={errors.username && touched.username ? true : false}
                >
                  <Field type="text" name="username" placeholder="Username" />
                  <ErrorMessage component={ErrorField} name="username" />
                </InputField>
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
                <InputField
                  label="Confirm password"
                  error={
                    errors.confirmPassword && touched.confirmPassword
                      ? true
                      : false
                  }
                >
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                  />
                  <ErrorMessage component={ErrorField} name="confirmPassword" />
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
                    size="large"
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Spinner name="circle" color="white" />
                    ) : (
                      <span>Register</span>
                    )}
                  </Button>
                </Center>
                <Center>
                  <p>
                    By signing up you agree to the{' '}
                    <a href={`${LANDING_PAGE_URL}terms-of-use`}>Terms of Use</a>{' '}
                    and the{' '}
                    <a href={`${LANDING_PAGE_URL}privacy-policy`}>
                      Privacy Policy
                    </a>
                  </p>
                </Center>
                <Center>
                  <p>
                    Already have an account? <Link to="/">Login</Link>
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

export default Register
