#!/bin/bash

echo '{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::myhosted-cctestdemowebsitetest1.com/*"
        }
    ]
}' > /tmp/bucket_policy.json

aws s3api create-bucket --bucket myhosted-cctestdemowebsitetest1.com --region ap-south-1  --create-bucket-configuration LocationConstraint=ap-south-1 \
  && aws s3api put-bucket-policy --bucket myhosted-cctestdemowebsitetest1.com --policy file://bucket_policy.json \
  && aws s3 sync C:\Users\sanilreddy\Downloads\reactjs-demo\build s3://myhosted-cctestdemowebsitetest1.com/  --profile sanil \
  && aws s3 website s3://myhosted-cctestdemowebsitetest1.com/ --index-document index.html --error-document error.html --profile equivalent