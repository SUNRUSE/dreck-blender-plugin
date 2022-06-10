./plugins/other-plugin/generated/scene.blend: ./plugins/other-plugin/scene.blend
	mkdir -p $(dir $@)
	cp $< $@

./plugins/other-plugin/generated/dreck_blender_output_type_script_paths.txt:
	mkdir -p $(dir $@)
	echo $(DRECK_BLENDER_OUTPUT_TYPE_SCRIPT_PATHS) > $@
