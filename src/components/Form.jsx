import { useForm } from 'react-hook-form';

function Form() {
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', gap: '1rem', flexDirection: 'column', maxWidth: '48rem', marginBottom: '4rem', width: '100%' }}>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          {...register('email', { required: 'Email is required' })}
          style={{
            width: '100%',
            padding: '1rem 1rem',
            backgroundColor: 'rgba(250, 250, 250, 1)',
            border: 'none',
            borderRadius: '0.7rem',
          }}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          {...register('name', { required: 'Name is required' })}
          style={{
            width: '100%',
            padding: '1rem 1rem',
            backgroundColor: 'rgba(250, 250, 250, 1)',
            border: 'none',
            borderRadius: '0.7rem',
          }}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <textarea
        name="text"
        placeholder="Your text"
        required
        {...register('text', { required: 'Text is required' })}
        style={{
          width: '100%',
          padding: '1rem 1rem',
          backgroundColor: 'rgba(250, 250, 250, 1)',
          border: 'none',
          borderRadius: '0.7rem',
        }}
      />
      {errors.text && <p>{errors.text.message}</p>}

      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <input
          type="submit"
          value={'Send'}
          style={{
            display: 'inline-flex',
            padding: '1rem 2rem',
            border: 'none',
            color: '#fff',
            backgroundColor: 'rgba(9, 13, 26, 1)',
            borderRadius: '0.7rem',
            maxWidth: '10rem',
            fontWeight: '600',
          }}
        />
      </div>
    </form>
  );
}

export default Form;
