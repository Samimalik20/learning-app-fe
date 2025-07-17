/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface FileDTO {
  url: string;
  key: string;
}

export interface User {
  /** @example "John Doe" */
  fullName: string;
  /** @example "john@example.com" */
  email: string;
  /** @example "hashedpassword123" */
  password: string;
  /**
   * Date of birth in YYYY-MM-DD format
   * @example "1990-05-20"
   */
  dob: string;
  profile: FileDTO;
  /** @example "Teacher" */
  role: "Admin" | "Teacher" | "Student";
  /** @example "true" */
  isVerified: boolean;
  /** @example "true" */
  isActive: boolean;
  /**
   * @format date-time
   * @example "2024-06-25T12:34:56.789Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2024-06-25T12:34:56.789Z"
   */
  updatedAt: string;
}

export interface Teacher {
  /** @example 1 */
  id: number;
  /**
   * Area of expertise
   * @example "Aesthetic Medicine"
   */
  specialization: string;
  /**
   * Phone number of the user in international format
   * @example "+92-300-1234567"
   */
  phone: string;
  /** @example "MBBS, Diploma in Dermatology" */
  qualification: string;
  /**
   * Years of experience in the field
   * @example "5"
   */
  experienceYears: string;
  /** @example "Experienced trainer in skin aesthetics and injectables." */
  bio: string;
  /** @example "Active" */
  status: "Active" | "Blocked";
  /** @example 1 */
  userId: number;
  user: User;
  courses: Course[];
}

export interface Course {
  /** @example 1 */
  id: number;
  /** @example "Full Stack Web Development" */
  title: string;
  /** @example "Learn frontend and backend with real projects" */
  description: string;
  /** @example 500 */
  price: string;
  /** @example "3 months" */
  duration: string;
  image: FileDTO;
  /** @example "published" */
  status: "draft" | "published" | "paused";
  modules: Modules[];
  teachers: Teacher[];
  /**
   * @format date-time
   * @example "2024-06-25T12:34:56.789Z"
   */
  createdAt: string;
  /**
   * @format date-time
   * @example "2024-06-25T12:34:56.789Z"
   */
  updatedAt: string;
}

export interface Question {
  /** @example 1 */
  id: number;
  /** @example "What is the output of 1 + "2" in JavaScript?" */
  title: string;
  /** @example "Tests JavaScript type coercion" */
  description: string;
  /** @example ["\"3\"","\"12\"","NaN","TypeError"] */
  options: string[];
  /** @example ""3"" */
  correctAnswer: string;
  /** @example 4 */
  lessonId: number;
  lesson: Lesson;
}

export interface Section {
  /** @example 1 */
  id: number;
  /**
   * Type of section content
   * @example "text"
   */
  type:
    | "heading"
    | "text"
    | "image"
    | "audio"
    | "video"
    | "divider"
    | "callout";
  /**
   * Content varies based on section type (heading, text, image, etc.)
   * @example {"text":"New Heading","level":2}
   */
  content: Record<string, any>;
  /**
   * Order of this section within the lesson
   * @example 1
   */
  order: number;
  /**
   * Related Lesson ID
   * @example "lesson-id"
   */
  lessonId: string;
}

export interface Lesson {
  /** @example 1 */
  id: number;
  /** @example "Understanding the Event Loop" */
  title: string;
  /** @example "How JavaScript handles asynchronous operations" */
  description: string;
  /** @example "2 hours" */
  duration: string;
  /** @example 5 */
  moduleId: number;
  module: Modules;
  questions: Question[];
  sections: Section[];
}

export interface Modules {
  /** @example 1 */
  id: number;
  /** @example "Advanced Async Concepts" */
  title: string;
  /** @example "Covers Promises, Async/Await, and advanced async patterns" */
  description: string;
  /** @example "6-8 hours" */
  duration: string;
  /** @example "published" */
  status: "draft" | "published" | "paused";
  /**
   * Related Course ID
   * @example 3
   */
  courseId: number;
  course: Course;
  lessons: Lesson[];
}

export interface NameResponseDto {
  /** @example "123" */
  id: number;
  /** @example "Introduction to Programming" */
  title: string;
}

export interface SignUpDto {
  /** @example "John Doe" */
  fullName: string;
  /** @example "john@example.com" */
  email: string;
  /** @example "StrongP@ssw0rd" */
  password: string;
}

export interface SignInDto {
  /** @example "john@example.com" */
  email: string;
  /** @example "StrongP@ssw0rd" */
  password: string;
}

export interface UpdateUserDto {
  /** @example "John Doe" */
  fullName: string;
  /** @example "+923001234567" */
  phone: string;
  /** @example "1990-05-20" */
  dob: string;
}

export interface CreateModuleDto {
  /** @example "Advanced Async Concepts" */
  courseId: string;
  /** @example "Advanced Async Concepts" */
  title: string;
  /** @example "Covers Promises, Async/Await, and advanced async patterns" */
  description: string;
}

export interface UpdateModuleDto {
  /** @example "Advanced Async Concepts" */
  courseId?: string;
  /** @example "Advanced Async Concepts" */
  title?: string;
  /** @example "Covers Promises, Async/Await, and advanced async patterns" */
  description?: string;
}

export interface CreateLessonDto {
  /** @example "Introduction to Anatomy" */
  title: string;
  /** @example "This lesson covers the basics of anatomy." */
  description: string;
  /** @example "2 hours" */
  duration: string;
  /** @example 1 */
  moduleId: number;
}

export interface UpdateLessonDto {
  /** @example "Introduction to Anatomy" */
  title?: string;
  /** @example "This lesson covers the basics of anatomy." */
  description?: string;
  /** @example "2 hours" */
  duration?: string;
  /** @example 1 */
  moduleId?: number;
}

export interface CreateSectionDto {
  type:
    | "heading"
    | "text"
    | "image"
    | "audio"
    | "video"
    | "divider"
    | "callout";
  content: Record<string, any>;
  /** @example 1 */
  order: number;
  /** @example "1" */
  lessonId: string;
}

export interface UpdateSectionDto {
  /** @example "1" */
  content: object;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type ? { "Content-Type": type } : {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      })
      .then((response) => response.data);
  };
}

/**
 * @title Online Learning Platform
 * @version 1.0
 * @contact
 *
 * NestJS + Sequelize + Swagger
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Question
   * @name QuestionControllerGetHello
   * @request GET:/
   */
  questionControllerGetHello = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "GET",
      ...params,
    });

  courses = {
    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerFindAll
     * @summary Get all courses
     * @request GET:/courses
     */
    coursesControllerFindAll: (params: RequestParams = {}) =>
      this.request<Course[], any>({
        path: `/courses`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerCreate
     * @summary Create a new course
     * @request POST:/courses
     */
    coursesControllerCreate: (params: RequestParams = {}) =>
      this.request<Course, any>({
        path: `/courses`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerFindByNames
     * @summary Get all courses by name
     * @request GET:/courses/by-names
     */
    coursesControllerFindByNames: (params: RequestParams = {}) =>
      this.request<NameResponseDto[], any>({
        path: `/courses/by-names`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerUpdate
     * @summary Update an existing course
     * @request PATCH:/courses/{id}
     */
    coursesControllerUpdate: (id: number, params: RequestParams = {}) =>
      this.request<Course, any>({
        path: `/courses/${id}`,
        method: "PATCH",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerFindOne
     * @summary Get a course by ID
     * @request GET:/courses/{id}
     */
    coursesControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Course, any>({
        path: `/courses/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesControllerRemove
     * @summary Delete a course
     * @request DELETE:/courses/{id}
     */
    coursesControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/courses/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  teachers = {
    /**
     * No description
     *
     * @tags teachers
     * @name TeacherControllerGetAllTeachers
     * @summary Get all teachers
     * @request GET:/teachers
     */
    teacherControllerGetAllTeachers: (params: RequestParams = {}) =>
      this.request<Teacher[], any>({
        path: `/teachers`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UserControllerRegister
     * @summary Register a new user
     * @request POST:/users/register
     */
    userControllerRegister: (data: SignUpDto, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerLogin
     * @summary User login
     * @request POST:/users/login
     */
    userControllerLogin: (data: SignInDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerGetMe
     * @summary Get current user info
     * @request GET:/users/me
     * @secure
     */
    userControllerGetMe: (params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerCreate
     * @summary Create a new user (admin only)
     * @request POST:/users
     */
    userControllerCreate: (data: SignUpDto, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerFindAll
     * @summary Get all users
     * @request GET:/users
     */
    userControllerFindAll: (params: RequestParams = {}) =>
      this.request<User[], any>({
        path: `/users`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerFindOne
     * @summary Get user by ID
     * @request GET:/users/{id}
     */
    userControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerUpdate
     * @summary Update user by ID
     * @request PATCH:/users/{id}
     */
    userControllerUpdate: (
      id: string,
      data: UpdateUserDto,
      params: RequestParams = {},
    ) =>
      this.request<User, any>({
        path: `/users/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerRemove
     * @summary Delete user
     * @request DELETE:/users/{id}
     */
    userControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  modules = {
    /**
     * No description
     *
     * @tags Modules
     * @name ModulesControllerCreate
     * @summary Create a new module
     * @request POST:/modules
     */
    modulesControllerCreate: (
      data: CreateModuleDto,
      params: RequestParams = {},
    ) =>
      this.request<Modules, any>({
        path: `/modules`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modules
     * @name ModulesControllerFindAll
     * @summary Get all modules
     * @request GET:/modules
     */
    modulesControllerFindAll: (
      query?: {
        /** @example "id" */
        courseId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Modules[], any>({
        path: `/modules`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modules
     * @name ModulesControllerFindOne
     * @summary Get module by ID
     * @request GET:/modules/{id}
     */
    modulesControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Modules, any>({
        path: `/modules/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modules
     * @name ModulesControllerUpdate
     * @summary Update a module by ID
     * @request PATCH:/modules/{id}
     */
    modulesControllerUpdate: (
      id: number,
      data: UpdateModuleDto,
      params: RequestParams = {},
    ) =>
      this.request<Modules, any>({
        path: `/modules/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modules
     * @name ModulesControllerRemove
     * @summary Delete a module by ID
     * @request DELETE:/modules/{id}
     */
    modulesControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/modules/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modules
     * @name ModulesControllerFindByCourse
     * @summary Get modules by course ID
     * @request GET:/modules/course/{courseId}
     */
    modulesControllerFindByCourse: (
      courseId: number,
      params: RequestParams = {},
    ) =>
      this.request<Modules[], any>({
        path: `/modules/course/${courseId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  lessons = {
    /**
     * No description
     *
     * @tags Lessons
     * @name LessonsControllerCreate
     * @summary Create a new lesson
     * @request POST:/lessons
     */
    lessonsControllerCreate: (
      data: CreateLessonDto,
      params: RequestParams = {},
    ) =>
      this.request<Lesson, any>({
        path: `/lessons`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lessons
     * @name LessonsControllerFindAll
     * @summary Get all lessons
     * @request GET:/lessons
     */
    lessonsControllerFindAll: (
      query?: {
        /** @example 1 */
        moduleId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Lesson[], any>({
        path: `/lessons`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lessons
     * @name LessonsControllerFindOne
     * @summary Get lesson by ID
     * @request GET:/lessons/{id}
     */
    lessonsControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Lesson, any>({
        path: `/lessons/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lessons
     * @name LessonsControllerUpdate
     * @summary Update lesson by ID
     * @request PATCH:/lessons/{id}
     */
    lessonsControllerUpdate: (
      id: number,
      data: UpdateLessonDto,
      params: RequestParams = {},
    ) =>
      this.request<Lesson, any>({
        path: `/lessons/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lessons
     * @name LessonsControllerRemove
     * @summary Delete lesson by ID
     * @request DELETE:/lessons/{id}
     */
    lessonsControllerRemove: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/lessons/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lessons
     * @name LessonsControllerFindByModule
     * @summary Get lessons by module ID
     * @request GET:/lessons/module/{moduleId}
     */
    lessonsControllerFindByModule: (
      moduleId: number,
      params: RequestParams = {},
    ) =>
      this.request<Lesson[], any>({
        path: `/lessons/module/${moduleId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  sections = {
    /**
     * No description
     *
     * @tags Sections
     * @name SectionsControllerCreate
     * @summary Create a section
     * @request POST:/sections
     */
    sectionsControllerCreate: (
      data: CreateSectionDto,
      params: RequestParams = {},
    ) =>
      this.request<Section, any>({
        path: `/sections`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sections
     * @name SectionsControllerGetById
     * @summary Get a section by ID
     * @request GET:/sections/{id}
     */
    sectionsControllerGetById: (id: string, params: RequestParams = {}) =>
      this.request<Section, any>({
        path: `/sections/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sections
     * @name SectionsControllerDuplicateById
     * @summary Duplicate  a section by ID
     * @request POST:/sections/{id}
     */
    sectionsControllerDuplicateById: (id: number, params: RequestParams = {}) =>
      this.request<Section, any>({
        path: `/sections/${id}`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sections
     * @name SectionsControllerUpdate
     * @summary Update a section by ID
     * @request PATCH:/sections/{id}
     */
    sectionsControllerUpdate: (
      id: number,
      data: UpdateSectionDto,
      params: RequestParams = {},
    ) =>
      this.request<Section, any>({
        path: `/sections/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sections
     * @name SectionsControllerDelete
     * @summary Delete a section by ID
     * @request DELETE:/sections/{id}
     */
    sectionsControllerDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sections/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
}
