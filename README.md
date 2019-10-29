# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :user_group
- has_many :comments
- has_many  :groups,  through: :user_group

## groupsテーブル
Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|name|name|null: false|
### Association
- has_many :comments
- has_many :user_group
- has_many  :users,  through: :user_group

## user_groupテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :users
- belongs_to :groups

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :groups
- belongs_to :users
