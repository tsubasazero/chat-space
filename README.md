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
|user_id|string|index: true|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :user_groups
- has_many :comments
- has_many  :groups,  through: :user_groups

## groupsテーブル
Column|Type|Options|
|------|----|-------|
|group_id|references|null: false|
|name|name|null: false|
### Association
- has_many :comments
- has_many :user_groups
- has_many  :users,  through: :user_groups

## user_groupsテーブル
|Column|Type|Options|
|------|----|-------|

|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
