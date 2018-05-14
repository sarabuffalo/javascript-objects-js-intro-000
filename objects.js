var playlist  = {john: "caffeine"}

function updatePlaylist(playlist, name, song) {
   playlist[name] = song

  return playlist
}

function removeFromPlaylist(playlist, name) {
  delete name.song
  return playlist
}
