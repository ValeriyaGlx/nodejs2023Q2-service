export const ERRORS = {
  userExist: (login: string) => `This user ${login} is already exist`,
  entityNotFound: (entity: string, id: string) => `${entity} with id ${id} not found`,
  wrongRassworrd: 'You passed the wrong passwond',
};
