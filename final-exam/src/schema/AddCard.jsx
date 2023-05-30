import * as yup from 'yup';

export const AddCard = yup.object().shape({
    image: yup.string().required("Image is required"),
    title: yup.string().required("Please add a title"),
    description: yup.string().required("Please add a description"),
});