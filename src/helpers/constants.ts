export const ERRORS = {
  userExist: (login: string) => `This user ${login} is already exist`,
  userNotFound: (id: string) => `User with id ${id} not found`,
}
