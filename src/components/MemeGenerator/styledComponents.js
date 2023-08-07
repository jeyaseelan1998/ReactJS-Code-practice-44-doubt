import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  font-family: 'Open Sans';
  font-size: 38px;
  font-weight: 700;
  color: #35469c;
`

export const Label = styled.label`
  color: #7e858e;
  font-family: 'Open sans';
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
`

export const Input = styled.input`
  color: #5a7184;
  font-family: 'Open sans';
  font-weight: 600;
  font-size: 14px;
  padding: 10px;
  margin-bottom: 15px;
`
export const Select = styled(Input)`
  font-weight: 600;
  font-size: 16px;
  padding: 8px;
`

export const Button = styled.button`
  padding: 12px 24px;
  color: #fff;
  font-family: 'Open sans';
  font-weight: 600;
  font-size: 14px;
  background-color: #0b69ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

export const MemeContainer = styled.div`
  background-image: url('${props => props.imgUrl}');
  background-size: cover;
  margin-left: 25px;
  height: 350px;
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`

export const MemeText = styled.p`
  color: #fff;
  font-family: 'Open sans';
  font-weight: 600;
  font-size: ${props => props.fontSize}px;
`
