import React, { useState } from "react";
import product from "../images/product.png";
import { myStorage, myFirestore } from "../firebase_config";
import {
  AddProductContainer,
  FormWrap,
  FormTitle,
  FormInputWrap,
  FormInput,
  FormErrorTag,
  ImgWrap,
  Img,
  FormSubmitBtn,
} from "./addProductElement";

//-------------Form function----------------------------------
export const useForm = (validateInfo) => {
  const [values, setValues] = useState({
    pimage: [],
    pname: "",
    pdescription: "",
    pusage: "",
    pprice: "",
  });
  const [preview, setPreview] = useState([product]);
  const [errors, setErrors] = useState({});
  // const [picUrl, setPicUrl] = useState("");

  const imageSelectHandler = (event) => {
    event.preventDefault();
    console.log("---running image selector---");
    const { name } = event.target;
    setValues({
      ...values,
      [name]: [event.target.files[0]],
    });
    setPreview([URL.createObjectURL(event.target.files[0])]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    console.log("---errors---", Object.keys(errors).length);
    if (Object.keys(errors).length === 0) {
      var uploadTask = myStorage
        .ref("/products")
        .child(values.pimage[0].name)
        .put(values.pimage[0]);

      uploadTask.on(
        "state_changed",
        function (snapshot) {
          var progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log("Upload is " + progress + "% done");
        },
        function (error) {
          console.log("----upload failed----", error);
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log("File available at", downloadURL);
            var addPro = myFirestore.collection("products");
            console.log("--creating product db--");
            addPro
              .add({
                name: values.pname,
                price: values.pprice,
                description: values.pdescription,
                gallery: downloadURL,
                usage: values.pusage,
              })
              .then(() => {
                console.log("---product added---");
                alert("Product added successfully!");
                window.location.reload(false);
              })
              .catch((error) => {
                console.log("---failed added---");
                alert.error("Something is wrong, try again!");
              });
          });
        }
      );
    }
  };

  return {
    handleChange,
    values,
    handleSubmit,
    imageSelectHandler,
    errors,
    preview,
  };
};

//-----------Input field validation----------------------------------
function validateInfo(value) {
  let errors = {};

  if (!value.pname || value.pname === null) {
    errors.pname = "Name required!";
  }
  if (!value.pdescription || value.pname === null) {
    errors.pdescription = "Description required!";
  }
  if (!value.pusage || value.pname === null) {
    errors.pusage = "Usage required!";
  }
  if (!value.pprice || value.pname === null) {
    errors.pprice = "Name required!";
  }
  if (!value.pimage || value.pname.length === 0) {
    errors.pimage = "Please upload at least 1 image of the item!";
  }

  return errors;
}

//--------------Default add product function---------------------------
const AddProduct = () => {
  const {
    handleChange,
    values,
    handleSubmit,
    imageSelectHandler,
    errors,
    preview,
  } = useForm(validateInfo);
  return (
    <>
      {/* <FormWrap></FormWrap> */}
      <AddProductContainer>
        <FormWrap onSubmit={handleSubmit}>
          <FormTitle>Add new product</FormTitle>
          <FormInputWrap>
            <ImgWrap>
              <Img src={preview[0]} />
            </ImgWrap>
            <FormInput
              name="pimage"
              type="file"
              accept="image/*"
              onChange={imageSelectHandler}
            />
            <FormErrorTag>
              {errors.pimage && <p>{errors.pimage}</p>}
            </FormErrorTag>
          </FormInputWrap>
          <FormInputWrap>
            <FormInput
              type="text"
              name="pname"
              placeholder="Name"
              value={values.pname}
              onChange={handleChange}
            />
            <FormErrorTag>{errors.pname && <p>{errors.pname}</p>}</FormErrorTag>
          </FormInputWrap>
          <FormInputWrap>
            <FormInput
              type="text"
              name="pdescription"
              placeholder="Description"
              value={values.pdescription}
              onChange={handleChange}
            />
            <FormErrorTag>
              {errors.pdescription && <p>{errors.pdescription}</p>}
            </FormErrorTag>
          </FormInputWrap>
          <FormInputWrap>
            <FormInput
              type="text"
              name="pusage"
              placeholder="Usage"
              value={values.pusage}
              onChange={handleChange}
            />
            <FormErrorTag>
              {errors.pusage && <p>{errors.pusage}</p>}
            </FormErrorTag>
          </FormInputWrap>
          <FormInputWrap>
            <FormInput
              type="Text"
              name="pprice"
              placeholder="Price"
              value={values.pprice}
              onChange={handleChange}
            />
            <FormErrorTag>
              {errors.pprice && <p>{errors.pprice}</p>}
            </FormErrorTag>
          </FormInputWrap>
          <FormSubmitBtn type="submit" />
        </FormWrap>
      </AddProductContainer>
    </>
  );
};

export default AddProduct;
