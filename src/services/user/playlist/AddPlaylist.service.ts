import { AppDataSource } from "../../../data-source";
import Playlist from "../../../entities/playlist.entity";
import User from "../../../entities/user.entity";
import { AppError } from "../../../error/appError";


export const addPlaylistUserService = async (id:string, id_playlist:string) => {
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOneBy({id})

  const playlistRepository = AppDataSource.getRepository(Playlist)
  const playlistFind = await  playlistRepository.findOneBy({id: id_playlist})

  if(!playlistFind){
    throw new AppError(404, "Playlist not exist")
  }
  if(user.playlist.find((elem) => elem.id == playlistFind.id)){
    throw new AppError(404, "Playlist exist")
  }

  user.playlist = [...user.playlist, playlistFind]
  await userRepository.save(user);

  return 
};
