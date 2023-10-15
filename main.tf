#edit now as a varaible:

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket = "my-terraformstate-clever-buc"
    key    = "Git-action/terraform.tfstate" #this is just a directory
    region = "us-east-1"
  }
}
provider "aws" {
  region = var.region
  #profile = "default"
}

resource "aws_instance" "my_demo_ec2" {
  ami           = var.my_ami # us-east-1
  instance_type = var.instance_type
  tags = {
    "Name" = "my_first_ec2"
  }
}
variable "region" {
  description = "the aws region"
  type        = string
  default     = "us-east-1"
}

variable "my_ami" {
  description = "the aws ami"
  type        = string
  default     = "ami-026ebd4cfe2c043b2"
}

variable "instance_type" {
  description = "the ec2 instance type"
  type        = string
  default     = "t2.micro"
}