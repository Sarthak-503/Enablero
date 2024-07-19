'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Checkbox,
  FormGroup,
} from '@mui/material';
import { services } from '@/utils/services';
import { useForm, SubmitHandler } from 'react-hook-form';
import { contactFormType } from '@/types';
import { CommonFormHelperText } from '@/components/common/common-helper-text';
import { useTranslations } from 'next-intl';
import { contactContent } from '@/services';

const initialValue: contactFormType = {
  firstname: '',
  lastname: '',
  contact: '',
  email: '',
  services: [],
  contactPrefer: 'email',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    reset,
  } = useForm<contactFormType>({ defaultValues: initialValue });

  // Using the usetranslation
  const t = useTranslations('CONTACT_PAGE.MAIN_CONTENT.FORM_SECTION');

  // Submit Form Button
  const handleNextandSubmit: SubmitHandler<contactFormType> = (value) => {
    console.log(value);
    reset();
    setStep(1);
  };

  // To go to the previous form
  const prevForm = () => {
    setStep(step - 1);
  };

  // To go to next form and validate fields
  const handleOnNextForm = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleNextandSubmit)}>
        <Box>
          <Box p={1}>
            <Typography
              color={'primary'}
              variant='h6'
            >
              {step === 1 && 'Personal Information'}
              {step === 2 && 'Inquiry Details'}
            </Typography>
          </Box>

          <Box mt={2}>
            {step === 1 && (
              <Box mt={1}>
                <Grid
                  container
                  spacing={2}
                >
                  <Grid
                    xs={12}
                    sm={6}
                    item
                  >
                    {/* Firstname */}
                    <FormControl fullWidth>
                      <TextField
                        type='text'
                        size='small'
                        label='FirstName'
                        {...register('firstname', {
                          required: 'First name is required',
                        })}
                        error={!!errors.firstname}
                      />
                      <CommonFormHelperText error={errors.firstname} />
                    </FormControl>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6}
                    item
                  >
                    {/* Last name */}
                    <FormControl fullWidth>
                      <TextField
                        type='text'
                        size='small'
                        label='Lastname'
                        {...register('lastname', {
                          required: 'Last name is required',
                        })}
                        error={!!errors.lastname}
                      />
                      <CommonFormHelperText error={errors.lastname} />
                    </FormControl>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6}
                    item
                  >
                    {/* Email */}
                    <FormControl fullWidth>
                      <TextField
                        type='email'
                        size='small'
                        label='Email'
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Invalid Email format',
                          },
                        })}
                        error={!!errors.email}
                      />
                      <CommonFormHelperText error={errors.email} />
                    </FormControl>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6}
                    item
                  >
                    <FormControl fullWidth>
                      <TextField
                        type='number'
                        size='small'
                        label='Contact'
                        {...register('contact', {
                          required: 'Contact number is required',
                        })}
                        error={!!errors.contact}
                      />
                      <CommonFormHelperText error={errors.contact} />
                    </FormControl>
                  </Grid>

                  {/* Services */}
                  <Grid
                    xs={12}
                    item
                  >
                    <Box p={1}>
                      <FormControl
                        component='fieldset'
                        fullWidth
                      >
                        <FormLabel component='legend'>
                          Services you want
                        </FormLabel>
                        <FormGroup>
                          <Grid
                            container
                            spacing={2}
                          >
                            {services.map((service) => (
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={service.id}
                              >
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value={service.title}
                                      {...register('services')}
                                    />
                                  }
                                  label={service.title}
                                />
                              </Grid>
                            ))}
                          </Grid>
                        </FormGroup>
                      </FormControl>
                    </Box>
                  </Grid>
                  {/* Contact Preference */}
                  <Grid
                    xs={12}
                    sm={6}
                    item
                  >
                    <FormControl
                      component='fieldset'
                      fullWidth
                    >
                      <FormLabel component='legend'>
                        Contact Preference
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-label='contact-preference'
                        defaultValue='email'
                      >
                        <FormControlLabel
                          value='email'
                          control={<Radio {...register('contactPrefer')} />}
                          label='Email'
                          labelPlacement='end'
                        />
                        <FormControlLabel
                          value='phone'
                          control={<Radio {...register('contactPrefer')} />}
                          label='Phone'
                          labelPlacement='end'
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
            )}

            {/* Second Form */}
            {step === 2 && (
              <Box mt={4}>
                <Grid
                  container
                  spacing={2}
                >
                  {/* Subject */}
                  <Grid
                    item
                    xs={12}
                  >
                    <FormControl fullWidth>
                      <TextField
                        label='Subject'
                        {...register('subject', {
                          required: 'Subject is required',
                        })}
                        error={!!errors.subject}
                      />
                      <CommonFormHelperText error={errors.subject} />
                    </FormControl>
                  </Grid>
                  {/* Message */}
                  <Grid
                    item
                    xs={12}
                  >
                    <FormControl fullWidth>
                      <TextField
                        label='Message'
                        id='outlined-multiline-flexible'
                        multiline
                        rows={5}
                        {...register('message', {
                          required: 'Message is required',
                        })}
                        error={!!errors.message}
                      />
                      <CommonFormHelperText error={errors.message} />
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Box>

          {/* Buttons Box */}
          <Box mt={4}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
                sm={6}
              >
                <Button
                  disabled={step === 1}
                  variant='contained'
                  fullWidth
                  onClick={prevForm}
                >
                  {t(
                    `${contactContent.mainContent.formSection.previousButton}`
                  )}
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
              >
                {step < 2 ? (
                  <Button
                    variant='contained'
                    fullWidth
                    onClick={handleOnNextForm}
                    disabled={!isValid}
                  >
                    {t(`${contactContent.mainContent.formSection.nextButton}`)}
                  </Button>
                ) : (
                  <Button
                    variant='contained'
                    fullWidth
                    type='submit'
                    disabled={!isValid}
                  >
                    {t(
                      `${contactContent.mainContent.formSection.submitButton}`
                    )}
                  </Button>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default ContactForm;
