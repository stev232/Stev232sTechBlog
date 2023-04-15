# Stev232sTechBlog

## Description

## Acceptance Criteria

GIVEN a CMS-style blog site <br>
*WHEN* I visit the site for the first time <br>
__THEN__ I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in <br>
*WHEN* I click on the homepage option <br>
__THEN__ I am taken to the homepage <br>
*WHEN* I click on any other links in the navigation <br>
__THEN__ I am prompted to either sign up or sign in <br>
*WHEN* I choose to sign up <br>
__THEN__ I am prompted to create a username and password <br>
*WHEN* I click on the sign-up button <br>
__THEN__ my user credentials are saved and I am logged into the site <br>
*WHEN* I revisit the site at a later time and choose to sign in <br>
__THEN__ I am prompted to enter my username and password <br>
*WHEN* I am signed in to the site <br>
__THEN__ I see navigation links for the homepage, the dashboard, and the option to log out <br>
*WHEN* I click on the homepage option in the navigation <br>
__THEN__ I am taken to the homepage and presented with existing blog posts that include the post title and the date created <br>
*WHEN* I click on an existing blog post <br>
__THEN__ I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment <br>
*WHEN* I enter a comment and click on the submit button while signed in <br>
__THEN__ the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created <br>
*WHEN* I click on the dashboard option in the navigation <br>
__THEN__ I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post <br>
*WHEN* I click on the button to add a new blog post <br>
__THEN__ I am prompted to enter both a title and contents for my blog post <br>
*WHEN* I click on the button to create a new blog post <br>
__THEN__ the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post <br>
*WHEN* I click on one of my existing posts in the dashboard <br>
__THEN__ I am able to delete or update my post and taken back to an updated dashboard <br>
*WHEN* I click on the logout option in the navigation <br>
__THEN__ I am signed out of the site <br>
*WHEN* I am idle on the site for more than a set time <br>
__THEN__ I am able to view comments but I am prompted to log in again before I can add, update, or delete comments <br>

## Database Structure

* Blog
    * id
        * INTEGER
        * Primary Key
        * Not Null
        * Auto Increment
    * title
        * STRING
        * Not Null
    * date_created
        * Date
        * M/D/YYYY
        * Not Null
    * content
        * STRING
        * Not Null
    * user_id
        * INTEGER
        * Foreign key
        * Not Null
        * BelongsTo User.id
* User
    * id
        * INTEGER
        * Primary Key
        * Not Null
        * Auto Increment
    * user_name
        * STRING
        * Not Null
    * email
        * STRING
        * Not Null
    * password
        * STRING
        * Not Null