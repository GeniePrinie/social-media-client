export const profileThumbnail = (profile) => {
  const element = document.createElement("a");
  element.classList.add("profile", "thumbnail");
  element.href = `./?view=profile&name=${profile.name}`;
  const img = new Image();
  img.src = profile.avatar || "./assets/img/avatar.jpeg";
  img.alt = profile.name;
  img.classList.add("rounded-circle", "avatar", "border");
  element.title = `${profile.name}'s Profile`;
  element.append(img);
  return element;
};
