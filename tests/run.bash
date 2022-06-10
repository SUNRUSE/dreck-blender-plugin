#!/usr/bin/env bats

@test "first run" {
  repository=$(pwd)
  temporaryDirectory=$(mktemp -d)
  expected=$temporaryDirectory/expected
  cp -r ./tests/first-run/expected/. $expected
  mkdir -p $expected/plugins/dreck
  cp -r ./plugins/dreck $expected/plugins
  mkdir -p $expected/plugins/blender
  cp -r . $expected/plugins/blender
  actual=$temporaryDirectory/actual
  cp -r ./tests/first-run/input/. $actual
  mkdir -p $actual/plugins/dreck
  cp -r ./plugins/dreck $actual/plugins
  mkdir -p $actual/plugins/blender
  cp -r . $actual/plugins/blender
  cd $actual

  make --file ./plugins/dreck/makefile

  cd $actual/plugins/blender
  npm ci
  npm test
  rm -r $actual/plugins/blender/node_modules $actual/plugins/blender/index.js $actual/plugins/blender/.nyc_output $actual/plugins/blender/generated
  cd $repository
  diff --brief --recursive $actual $expected
  rm -rf $temporaryDirectory
}
