import { Field, Form, FormikProps } from "formik";
import Button from "../../Elements/Buttons";
import Typography from "../../Typography";
import FormInput from "../Fields/inputField";
import {
  ProductDetails,
  FormProductInputGroup,
  FormProduct,
  ProductImage,
  FlexButon,
  ProductImageUploadGroup,
  ProductImageUpload,
  ProductImageUploadGroupButton,
  Continer,
} from "./newProduct.style";
import { CreateNewProductValues } from "./interface";
import { useTheme } from "styled-components";
import CustomSelect from "../Fields/customSelect";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../../Store/configureStore";
import { getAllcategories } from "../../../Store/Slices/products";
import Upload from "../../Icons/Upload";
import CloseIcon from "../../Icons/CloseIcon";

interface OtherProps {
  isEditing: boolean;
  data?: any;
}
const FormNewProduct = (
  props: OtherProps & FormikProps<CreateNewProductValues>
) => {
  const theme = useTheme();
  const { errors, touched, setFieldValue, isEditing, data, submitForm } = props;
  const dispatch = useAppDispatch();
  let { categories } = useSelector(
    (state: RootState) => state.entities.products
  );
  let categoriesArray: { label: string; value: string }[] = [];
  const colorsArray = [
    { label: "Red", value: "Red" },
    { label: "Brown", value: "Brown" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
    { label: "Black", value: "Black" },
    { label: "White", value: "White" },
  ];

  useEffect(() => {
    dispatch(getAllcategories());
    if (isEditing && data) {
      const {
        images: productImage,
        colors: colors,
        categories: productCategroy,
        price: productPrice,
        countInStock: productCount,
        _id: productID,
        name: productName,
        description: productDiscription,
        brand: productBrand,
      } = data;
      setFieldValue("productName", productName);
      setFieldValue("productBrand", productBrand);
      setFieldValue("productID", productID);
      setFieldValue("productCount", productCount);
      setFieldValue("productCategroy", productCategroy);
      setFieldValue("productDiscription", productDiscription);
      setFieldValue("productPrice", productPrice);
      setFieldValue("colors", colors);
    }
  }, [dispatch]);

  if (categories.length > 0) {
    categories.map((ele) =>
      categoriesArray.push({ label: ele.name, value: ele.name })
    );
  }
  return (
    <Form >
    <Continer>
      <FormProduct>
        <ProductImage>
          <ProductImageUpload
            style={{
              background: `url(${isEditing && data.images[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Button
              type="button"
              backgroundColor="transparent"
              height={""}
              width={""}
              bold={false}
              fontSize={"12px"}
              color={theme.textColors.primary}

            >
              {!isEditing ? <Upload /> : <CloseIcon />}
            </Button>
          </ProductImageUpload>
          <ProductImageUploadGroup>
            <ProductImageUploadGroupButton
              style={{
                background: `url(${isEditing && data.images[1]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Button
                type="button"
                height={""}
                width={""}
                bold={false}
                padding={"1rem"}
                backgroundColor="transparent"
                color={theme.textColors.primary}
              >
                +
              </Button>{" "}
            </ProductImageUploadGroupButton>
            <ProductImageUploadGroupButton
              style={{
                background: `url(${isEditing && data.images[2]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Button
                type="button"
                height={""}
                width={""}
                bold={false}
                padding={"1rem"}
                backgroundColor="transparent"
                color={theme.textColors.primary}
              >
                +
              </Button>{" "}
            </ProductImageUploadGroupButton>{" "}
            <ProductImageUploadGroupButton
              style={{
                background: `url(${isEditing && data.images[3]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Button
                type="button"
                height={""}
                width={""}
                bold={false}
                padding={"1rem"}
                backgroundColor="transparent"
                color={theme.textColors.primary}
              >
                +
              </Button>{" "}
            </ProductImageUploadGroupButton>
          </ProductImageUploadGroup>
        </ProductImage>
        <ProductDetails>
          <Typography variant="h6">Product Details</Typography>
          <FormProductInputGroup>
            <FormInput
              type="input"
              name={"productName"}
              placeholder={"Product Name"}
              touched={touched}
              errors={errors}
              label={"Product Name"}
              fullWidth={false}
              width={"45%"}
            />
            <FormInput
              type="input"
              name={"productBrand"}
              placeholder={"Product Brand"}
              touched={touched}
              errors={errors}
              label={"Product Brand"}
              fullWidth={false}
              width={"45%"}
            />
          </FormProductInputGroup>
          <FormProductInputGroup>
            <Field
              name="colors"
              options={colorsArray}
              component={CustomSelect}
              placeholder="Select multi colors..."
              isMulti={true}
              touched={touched}
              errors={errors}
              label={"Product colors"}
              fullWidth={false}
              width={"45%"}
            />

            <Field
              name="productCategroy"
              options={categoriesArray}
              component={CustomSelect}
              placeholder="Select multi Categroy..."
              isMulti={true}
              touched={touched}
              errors={errors}
              label={"Product Categroy"}
              fullWidth={false}
              width={"45%"}
            />
          </FormProductInputGroup>
          <FormProductInputGroup>
            <FormInput
              component="textarea"
              name={"productDiscription"}
              placeholder={"Product Discription"}
              touched={touched}
              errors={errors}
              label={"Product Discription"}
              fullWidth={false}
              width={"100%"}
            />
          </FormProductInputGroup>
          <FormProductInputGroup>
            <FormInput
              type="input"
              name={"productCount"}
              placeholder={"Count In Stock"}
              touched={touched}
              errors={errors}
              label={"Count In Stock"}
              fullWidth={false}
              width={"45%"}
            />
            <FormInput
              type="input"
              name={"productPrice"}
              placeholder={"Product Price"}
              touched={touched}
              errors={errors}
              label={"Product Price"}
              fullWidth={false}
              width={"45%"}
            />
          </FormProductInputGroup>
        </ProductDetails>
      </FormProduct>
      <FlexButon>
        <Button
          padding={"1rem 3rem"}
          bold={false}
          backgroundColor="#4BB543"
          color={"#FFFFFF"}
          fontSize={"14px"}
          borderRaduies={"4px"}
          type="submit"
          
        >
          {isEditing ? "Update Product" : " Create New Product"}
        </Button>
      </FlexButon>
    </Continer>
    </Form>
  );
};

export default FormNewProduct;
