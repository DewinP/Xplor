import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  subbedCommunities?: Maybe<Array<Community>>;
  ownedCommunities?: Maybe<Array<Community>>;
  me?: Maybe<User>;
  communityMembers: Array<User>;
  community: Community;
  allCommunties: Array<Community>;
  post?: Maybe<Post>;
  communityPosts?: Maybe<Array<Post>>;
};


export type QueryCommunityMembersArgs = {
  name: Scalars['String'];
};


export type QueryCommunityArgs = {
  name: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['Float'];
};


export type QueryCommunityPostsArgs = {
  communityId: Scalars['Float'];
};

export type Community = {
  __typename?: 'Community';
  id: Scalars['Float'];
  name: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  memberCount: Scalars['Float'];
  ownerId: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
  avatar: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Float'];
  title: Scalars['String'];
  body: Scalars['String'];
  authorId: Scalars['Float'];
  communityId: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signup: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  createCommunity: Community;
  createPost: Post;
};


export type MutationSignupArgs = {
  input: UserInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationCreateCommunityArgs = {
  input: CommunityInput;
};


export type MutationCreatePostArgs = {
  input: PostInput;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
};

export type CommunityInput = {
  name: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
};

export type PostInput = {
  title: Scalars['String'];
  body: Scalars['String'];
  communityId: Scalars['Float'];
};

export type RegularCommunityFragment = (
  { __typename?: 'Community' }
  & Pick<Community, 'name' | 'ownerId' | 'createdAt' | 'updatedAt' | 'memberCount' | 'id' | 'title' | 'description'>
);

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularPostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'body' | 'communityId' | 'authorId'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email' | 'avatar'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type CreateCommunityMutationVariables = Exact<{
  input: CommunityInput;
}>;


export type CreateCommunityMutation = (
  { __typename?: 'Mutation' }
  & { createCommunity: (
    { __typename?: 'Community' }
    & RegularCommunityFragment
  ) }
);

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & RegularPostFragment
  ) }
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type SignupMutationVariables = Exact<{
  input: UserInput;
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type AllCommunitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCommunitiesQuery = (
  { __typename?: 'Query' }
  & { allCommunties: Array<(
    { __typename?: 'Community' }
    & RegularCommunityFragment
  )> }
);

export type CommunityQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type CommunityQuery = (
  { __typename?: 'Query' }
  & { community: (
    { __typename?: 'Community' }
    & RegularCommunityFragment
  ) }
);

export type CommunityPostsQueryVariables = Exact<{
  communityId: Scalars['Float'];
}>;


export type CommunityPostsQuery = (
  { __typename?: 'Query' }
  & { communityPosts?: Maybe<Array<(
    { __typename?: 'Post' }
    & RegularPostFragment
  )>> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type OwnedCommunitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type OwnedCommunitiesQuery = (
  { __typename?: 'Query' }
  & { ownedCommunities?: Maybe<Array<(
    { __typename?: 'Community' }
    & RegularCommunityFragment
  )>> }
);

export const RegularCommunityFragmentDoc = gql`
    fragment RegularCommunity on Community {
  name
  ownerId
  createdAt
  updatedAt
  memberCount
  id
  title
  description
}
    `;
export const RegularPostFragmentDoc = gql`
    fragment RegularPost on Post {
  id
  createdAt
  updatedAt
  title
  body
  communityId
  authorId
}
    `;
export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
  email
  avatar
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const CreateCommunityDocument = gql`
    mutation CreateCommunity($input: CommunityInput!) {
  createCommunity(input: $input) {
    ...RegularCommunity
  }
}
    ${RegularCommunityFragmentDoc}`;
export type CreateCommunityMutationFn = Apollo.MutationFunction<CreateCommunityMutation, CreateCommunityMutationVariables>;

/**
 * __useCreateCommunityMutation__
 *
 * To run a mutation, you first call `useCreateCommunityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommunityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommunityMutation, { data, loading, error }] = useCreateCommunityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCommunityMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommunityMutation, CreateCommunityMutationVariables>) {
        return Apollo.useMutation<CreateCommunityMutation, CreateCommunityMutationVariables>(CreateCommunityDocument, baseOptions);
      }
export type CreateCommunityMutationHookResult = ReturnType<typeof useCreateCommunityMutation>;
export type CreateCommunityMutationResult = Apollo.MutationResult<CreateCommunityMutation>;
export type CreateCommunityMutationOptions = Apollo.BaseMutationOptions<CreateCommunityMutation, CreateCommunityMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($input: UserInput!) {
  signup(input: $input) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const AllCommunitiesDocument = gql`
    query AllCommunities {
  allCommunties {
    ...RegularCommunity
  }
}
    ${RegularCommunityFragmentDoc}`;

/**
 * __useAllCommunitiesQuery__
 *
 * To run a query within a React component, call `useAllCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCommunitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCommunitiesQuery(baseOptions?: Apollo.QueryHookOptions<AllCommunitiesQuery, AllCommunitiesQueryVariables>) {
        return Apollo.useQuery<AllCommunitiesQuery, AllCommunitiesQueryVariables>(AllCommunitiesDocument, baseOptions);
      }
export function useAllCommunitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCommunitiesQuery, AllCommunitiesQueryVariables>) {
          return Apollo.useLazyQuery<AllCommunitiesQuery, AllCommunitiesQueryVariables>(AllCommunitiesDocument, baseOptions);
        }
export type AllCommunitiesQueryHookResult = ReturnType<typeof useAllCommunitiesQuery>;
export type AllCommunitiesLazyQueryHookResult = ReturnType<typeof useAllCommunitiesLazyQuery>;
export type AllCommunitiesQueryResult = Apollo.QueryResult<AllCommunitiesQuery, AllCommunitiesQueryVariables>;
export const CommunityDocument = gql`
    query Community($name: String!) {
  community(name: $name) {
    ...RegularCommunity
  }
}
    ${RegularCommunityFragmentDoc}`;

/**
 * __useCommunityQuery__
 *
 * To run a query within a React component, call `useCommunityQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCommunityQuery(baseOptions?: Apollo.QueryHookOptions<CommunityQuery, CommunityQueryVariables>) {
        return Apollo.useQuery<CommunityQuery, CommunityQueryVariables>(CommunityDocument, baseOptions);
      }
export function useCommunityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommunityQuery, CommunityQueryVariables>) {
          return Apollo.useLazyQuery<CommunityQuery, CommunityQueryVariables>(CommunityDocument, baseOptions);
        }
export type CommunityQueryHookResult = ReturnType<typeof useCommunityQuery>;
export type CommunityLazyQueryHookResult = ReturnType<typeof useCommunityLazyQuery>;
export type CommunityQueryResult = Apollo.QueryResult<CommunityQuery, CommunityQueryVariables>;
export const CommunityPostsDocument = gql`
    query CommunityPosts($communityId: Float!) {
  communityPosts(communityId: $communityId) {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;

/**
 * __useCommunityPostsQuery__
 *
 * To run a query within a React component, call `useCommunityPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityPostsQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useCommunityPostsQuery(baseOptions?: Apollo.QueryHookOptions<CommunityPostsQuery, CommunityPostsQueryVariables>) {
        return Apollo.useQuery<CommunityPostsQuery, CommunityPostsQueryVariables>(CommunityPostsDocument, baseOptions);
      }
export function useCommunityPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommunityPostsQuery, CommunityPostsQueryVariables>) {
          return Apollo.useLazyQuery<CommunityPostsQuery, CommunityPostsQueryVariables>(CommunityPostsDocument, baseOptions);
        }
export type CommunityPostsQueryHookResult = ReturnType<typeof useCommunityPostsQuery>;
export type CommunityPostsLazyQueryHookResult = ReturnType<typeof useCommunityPostsLazyQuery>;
export type CommunityPostsQueryResult = Apollo.QueryResult<CommunityPostsQuery, CommunityPostsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const OwnedCommunitiesDocument = gql`
    query OwnedCommunities {
  ownedCommunities {
    ...RegularCommunity
  }
}
    ${RegularCommunityFragmentDoc}`;

/**
 * __useOwnedCommunitiesQuery__
 *
 * To run a query within a React component, call `useOwnedCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOwnedCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOwnedCommunitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useOwnedCommunitiesQuery(baseOptions?: Apollo.QueryHookOptions<OwnedCommunitiesQuery, OwnedCommunitiesQueryVariables>) {
        return Apollo.useQuery<OwnedCommunitiesQuery, OwnedCommunitiesQueryVariables>(OwnedCommunitiesDocument, baseOptions);
      }
export function useOwnedCommunitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OwnedCommunitiesQuery, OwnedCommunitiesQueryVariables>) {
          return Apollo.useLazyQuery<OwnedCommunitiesQuery, OwnedCommunitiesQueryVariables>(OwnedCommunitiesDocument, baseOptions);
        }
export type OwnedCommunitiesQueryHookResult = ReturnType<typeof useOwnedCommunitiesQuery>;
export type OwnedCommunitiesLazyQueryHookResult = ReturnType<typeof useOwnedCommunitiesLazyQuery>;
export type OwnedCommunitiesQueryResult = Apollo.QueryResult<OwnedCommunitiesQuery, OwnedCommunitiesQueryVariables>;